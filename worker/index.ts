/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx): Promise<Response> {
    // Build a complete, serializable snapshot of the incoming request
    const requestDump = {
      method: request.method,
      url: request.url,
      headers: Object.fromEntries(request.headers),
    };
    const body = {
      resourceLogs: [
        {
          resource: {
            attributes: [
              {
                key: "service.name",
                value: {
                  stringValue: "personal-site",
                },
              },
            ],
          },
          scopeLogs: [
            {
              logRecords: [
                {
                  timeUnix: Date.now(),
                  body: {
                    // Use the serialized request snapshot so headers and body are stringified correctly
                    stringValue: JSON.stringify(requestDump),
                  },
                },
              ],
            },
          ],
        },
      ],
    };
    const header = {
      "Content-Type": "application/json",
      Authorization: env.LOGGING_API,
    };
    const res = await fetch(
      "https://otlp-gateway-prod-us-west-0.grafana.net/otlp/v1/logs",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: header,
      }
    );
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
