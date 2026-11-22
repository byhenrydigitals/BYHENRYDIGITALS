interface PagesEnv {
  CONTACT_WEBHOOK_URL?: string;
  CONTACT_FORWARD_SECRET?: string;
}

interface PagesContext {
  request: Request;
  env: PagesEnv;
}

export async function onRequestGet(_context: PagesContext): Promise<Response> {
  return Response.json(
    { ok: true, service: 'BYHENRYDIGITALS' },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
