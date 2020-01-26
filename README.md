# 11ty-data-bible

An alternative to https://github.com/pdehaan/11ty-pagination.

This approach generates a site based on a large (4.34 MB) JSON file, which is split into smaller, more performant JSON files.

> Wrote 1192 files in 2.17 seconds (1.8ms each, v0.10.0)

## Seeding data

Rather than dynamically fetch and parse the big JSON blob from the remote API each time the site is rebuilt, we fetch it once and cache it locally. You can "seed" the data by running <kbd>npm run seed:data</kbd> from your command line. Similarly, instead of creating templates manually, we can create the templates based on the fetched data by running <kbd>npm run seed:templates</kbd>, although note that running this command will overwrite your files in ./templates/*.njk (based on the rediculously named ./templates/_template.tmpl template file template). Shared template front-matter can be set in the ./templates/templates.json file (currently we're only setting `layout` and `permalink` here).

**NOTE:** It's important to run <kbd>npm run seed:templates</kbd> _after_ you've run <kbd>npm run seed:data</kbd> since the templates are generated based on the contents of the downloaded/seeded data.
