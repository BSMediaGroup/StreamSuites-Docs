# Migration notes

## Known risks
- URL changes may break inbound links unless redirects are planned.
- Current HTML may rely on custom CSS/JS that will need porting.
- Sidebar and nav structure may not map 1:1 without content reshaping.
- Mixed content types (HTML + MD) will need a clear conversion strategy.

## Assumptions
- Content will be converted to Markdown/MDX over time.
- The existing IA roughly maps to Docusaurus sections without major renames.
- Static assets can move under a `static/` directory without refactoring.
- Legal docs remain top-level and are linked from footer and sidebar.

## Open questions
- Which pages require interactive JS features that need custom components?
- Are there preferred URL slugs that must be preserved?
- Will versioned docs or multi-language support be needed?
