import { NextResponse } from "next/server";

const WEBHOOK_URL = "https://webhook3.assessorialpha.com/webhook/blood-educacao-home";

function formatDataEnvio(): string {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  return `${get("day")}/${get("month")}/${get("year")} ${get("hour")}:${get("minute")}`;
}

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("55") && digits.length >= 12) return `+${digits}`;
  return `+55${digits}`;
}

export async function POST(request: Request) {
  const data = await request.json();

  const payload = new URLSearchParams({
    Nome: String(data.nome ?? ""),
    Email: String(data.email ?? ""),
    "Whatsapp com DDD": normalizePhone(String(data.telefone ?? "")),
    Empresa: String(data.empresa ?? ""),
    Renda: String(data.renda ?? ""),
    utm_campaign: String(data.utm_campaign ?? ""),
    utm_source: String(data.utm_source ?? ""),
    utm_medium: String(data.utm_medium ?? ""),
    utm_term: String(data.utm_term ?? ""),
    utm_content: String(data.utm_content ?? ""),
    debug_full_url: String(data.debug_full_url ?? ""),
    data_envio: formatDataEnvio(),
    form_id: "c3fea05",
    form_name: "LP - FGA",
  });

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    if (!response.ok) {
      console.error("Webhook da FGA respondeu com erro:", response.status, await response.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (error) {
    console.error("Falha ao enviar lead para o webhook da FGA:", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
