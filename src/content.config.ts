import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/insights',
  }),
  schema: z.object({
    title:        z.string(),
    excerpt:      z.string(),
    platform:     z.enum(['Instagram', 'LinkedIn', 'Facebook', 'Website']),
    instagramUrl: z.string().url().optional(),
    category:     z.enum(['Marketing', 'Branding', 'Social Media', 'Web', 'Strategy']),
    date:         z.coerce.date(),
    featured:     z.boolean().default(false),
    tags:         z.array(z.string()).default([]),
    objective:    z.string(),
    strategy:     z.string(),

    // Single images array — hero flag marks the cover image explicitly
    images: z.array(
      z.object({
        src:  z.string().min(1),
        url:  z.string().url().optional(),
        hero: z.boolean().optional(),
        alt:  z.string().optional(),
      })
    ).min(1),

    alt:      z.string(),
    client:   z.string(),
    slug:     z.string().min(1),
    services: z.array(z.string()).default([]),
  }),
});

const work = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/work',
  }),
  schema: z.object({
    theme: z.string().min(1),

    metaTitle:       z.string(),
    metaDescription: z.string(),

    title:   z.string(),
    slug:    z.string().min(1),
    tagline: z.string(),

    client:   z.string(),
    industry: z.string().optional(),
    location: z.string().optional(),
    year:     z.string().optional(),

    tags:     z.array(z.string()).default([]),
    services: z.array(z.string()).default([]),

    heroImage:    z.string().min(1),
    heroImageAlt: z.string().default('Case study hero image'),

    challengeHeading: z.string(),
    challenge:        z.array(z.string()).default([]),

    approachHeading: z.string(),
    approach:        z.array(z.string()).default([]),

    approachPillars: z.array(
      z.object({
        label: z.string(),
        text:  z.string(),
      })
    ).default([]),

    deliverables: z.array(
      z.object({
        number:      z.string(),
        service:     z.string(),
        heading:     z.string(),
        description: z.string(),
      })
    ).default([]),

    resultHeading: z.string(),
    result:        z.array(z.string()).default([]),

    stats: z.array(
      z.object({
        figure: z.string(),
        label:  z.string(),
      })
    ).default([]),

    quote:       z.string().optional(),
    quoteAuthor: z.string().optional(),

    featuredWebsite: z.object({
      url:        z.string().url().optional(),
      displayUrl: z.string().optional(),
      image:      z.string().min(1),
      alt:        z.string(),
      caption:    z.string(),
    }).optional(),

    applicationImages: z.array(
      z.object({
        src:     z.string().min(1),
        alt:     z.string(),
        caption: z.string(),
      })
    ).default([]),

    brandValues: z.array(z.string()).default([]),

    brandIdentity: z.object({
      sectionTitle:    z.string(),
      sectionSubtitle: z.string(),

      logoVariants: z.array(
        z.object({
          label:     z.string(),
          theme:     z.enum(['light', 'dark', 'brand']),
          markText:  z.string(),
          wordmark:  z.string(),
        })
      ).default([]),

      colours: z.array(
        z.object({
          name:      z.string(),
          hex:       z.string(),
          role:      z.string(),
          textTheme: z.enum(['light', 'dark']).default('dark'),
        })
      ).default([]),

      typography: z.object({
        display: z.object({
          label:      z.string(),
          fontFamily: z.string(),
          specimen:   z.string(),
          weights:    z.array(z.string()).default([]),
          usage:      z.string(),
        }),
        body: z.object({
          label:      z.string(),
          fontFamily: z.string(),
          specimen:   z.string(),
          weights:    z.array(z.string()).default([]),
          usage:      z.string(),
        }),
        inUse: z.object({
          label:    z.string(),
          headline: z.string(),
          body:     z.string(),
        }),
      }),
    }).optional(),

    nextProject: z.object({
      name: z.string(),
      href: z.string(),
    }).optional(),
  }),
});

export const collections = {
  insights,
  work,
};