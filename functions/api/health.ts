import {
  type ContactEnv,
  getConfiguredProviders,
  OFFICIAL_RECIPIENT_EMAIL,
} from '../_lib/contactDelivery.ts';

interface PagesContext {
  request: Request;
  env: ContactEnv;
}

export async function onRequestGet(context: PagesContext): Promise<Response> {
  const configuredProviders = getConfiguredProviders(context.env);
  return Response.json(
    {
      ok: true,
      service: 'BYHENRYDIGITALS',
      recipient: OFFICIAL_RECIPIENT_EMAIL,
      contactDeliveryConfigured: configuredProviders.length > 0,
      activeProvider: configuredProviders[0] ?? null,
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}
