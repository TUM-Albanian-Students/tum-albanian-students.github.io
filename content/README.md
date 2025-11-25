# Content Management with YAML

This directory contains YAML files that manage the dynamic content for the website. You can edit these files to add, remove, or modify content without touching the code.

## Files

### `team.yaml`
Manages team member information.

```yaml
members:
  - name: Full Name
    role: president  # Options: president, vicePresident, eventCoordinator, financeHead
    image: https://example.com/image.jpg
```

**To add a new team member:**
1. Add a new entry under `members`
2. Fill in the name, role, and image URL
3. If you want a new role, add it to the translations files first ([locales/en.json](../locales/en.json), [locales/de.json](../locales/de.json), [locales/sq.json](../locales/sq.json)) under `team.roles`

### `events.yaml`
Manages event listings.

```yaml
events:
  - id: unique-event-id
    title: flagDay  # Translation key
    date: flagDayDate  # Optional translation key
    image: https://example.com/event-image.jpg
    buttonText: details  # Translation key
    featured: true  # true for main large card, false for smaller cards
    status: upcoming  # Options: upcoming, past
```

**To add a new event:**
1. Add a new entry under `events`
2. Give it a unique `id`
3. Add translation keys to the translation files under `events.{yourKey}`
4. Set `featured: true` for one event to make it the main featured event
5. Use `status: past` to show it as a past event (will be grayscale)

### `projects.yaml`
Manages project listings.

```yaml
projects:
  - id: unique-project-id
    title: mentorship  # Translation key base
    description: mentorship  # Translation key base
    category: mentorship  # Translation key base
```

**To add a new project:**
1. Add a new entry under `projects`
2. Give it a unique `id`
3. Add translations to the translation files under `projects.items.{yourKey}.title`, `.description`, and `.category`

## Translation Files

All text content is managed through translation files in the [locales/](../locales/) directory:
- [locales/en.json](../locales/en.json) - English
- [locales/de.json](../locales/de.json) - German
- [locales/sq.json](../locales/sq.json) - Albanian

When you add new content to YAML files, make sure to add corresponding translations in all three language files.

## Example: Adding a New Board Member

1. **Edit [team.yaml](team.yaml):**
```yaml
members:
  # ... existing members ...
  - name: Jane Doe
    role: secretary
    image: https://example.com/jane.jpg
```

2. **Add translations in [locales/en.json](../locales/en.json):**
```json
{
  "team": {
    "roles": {
      "secretary": "Secretary",
      // ... other roles
    }
  }
}
```

3. **Add translations in [locales/de.json](../locales/de.json):**
```json
{
  "team": {
    "roles": {
      "secretary": "Sekretär",
      // ... other roles
    }
  }
}
```

4. **Add translations in [locales/sq.json](../locales/sq.json):**
```json
{
  "team": {
    "roles": {
      "secretary": "Sekretar",
      // ... other roles
    }
  }
}
```

The changes will be reflected automatically when you save the files!
