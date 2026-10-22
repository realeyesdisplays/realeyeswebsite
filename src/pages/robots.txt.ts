import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const production = import.meta.env.PUBLIC_SITE_ENV === 'production';
  const body = production
    ? [
        'User-agent: OAI-SearchBot',
        'Allow: /',
        '',
        'User-agent: GPTBot',
        'Disallow: /',
        '',
        'User-agent: *',
        'Allow: /',
        '',
        'Sitemap: https://realeyesdisplays.com/sitemap-index.xml',
        '',
      ].join('\n')
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
