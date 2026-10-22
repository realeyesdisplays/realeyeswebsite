import type { APIRoute } from 'astro';

export const prerender = true;

const body = `# RealEyes Displays

> RealEyes Displays designs, deploys, and supports passive and interactive digital signage systems for organizations across the United States.

RealEyes Displays has more than 20 years of experience combining enterprise signage software, professional content design, device setup, deployment, training, and people-first support. The company supports office buildings, corporate headquarters, universities, senior living communities, houses of worship, clinics, events, museums, and partner-led installations.

## Main pages

- [Home](https://realeyesdisplays.com/): Overview of RealEyes Displays and its digital signage services.
- [Passive Displays](https://realeyesdisplays.com/passive-displays/): Non-touch signage, menu boards, directories, lobby displays, internal communications, and managed display systems.
- [Interactive Displays](https://realeyesdisplays.com/interactive/): Touchscreen kiosks, wayfinding, directories, storytelling, visitor experiences, and custom interactive applications.
- [Our Roots](https://realeyesdisplays.com/our-roots/): The company's software, design, device support, and customer-support approach.
- [Partners](https://realeyesdisplays.com/partners/): Partnership information for AV firms, marketing agencies, and IT providers.
- [Contact](https://realeyesdisplays.com/contact-us/): New-project consultation, system rehabilitation, and existing-client support.

## Official links

- [YouTube](https://www.youtube.com/realeyesdisplays)
- [Client Login](https://realeyes.playr.biz/)
- [Current Privacy Policy](https://realeyes.playr.biz/en/privacy_policy)

## Contact

- Phone: +1 (888) 649-5289
- Website: https://realeyesdisplays.com/
`;

export const GET: APIRoute = () => new Response(body, {
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
});
