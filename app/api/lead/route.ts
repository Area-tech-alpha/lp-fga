import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // TODO: encaminhar `data` para o CRM/planilha/webhook definitivo.
  console.log("Novo lead FGA:", data);

  return NextResponse.json({ ok: true });
}
