# Jelena Skudra: website

## How to change text on the website (2 minutes)

1. Go to github.com, sign in, and open this repository.
2. Click the file **content.js**.
3. Click the **pencil icon** (Edit) at the top right of the file.
4. Change the words inside the "quotes". English is in the `en:` part and Russian is in the `ru:` part.
5. Click **Commit changes…** and then **Commit changes** again.
6. Wait about 1 minute, then refresh the website.

### Rules so nothing breaks
- Change only the text inside the quotes. Keep the `"`, `,`, `{ }` and `[ ]` where they are.
- Don't type a plain `"` inside a text. Use «ёлочки» or ’ instead.
- Wrap words in `*stars*` to get the yellow highlighter.
- Use `""` (empty) to hide something, for example `whatsapp: ""`.
- If the site goes blank after an edit, you've probably deleted a quote or a comma. Open the file, click **History**, and restore the previous version.

### Common changes
| What | Where in content.js |
|---|---|
| Booking calendar link | `settings` → `bookingLink` |
| Email / WhatsApp / Telegram / Instagram | `settings` |
| Show prices | `settings` → `showPrices: true`, then fill `prices` in both languages |
| Language levels | `languages` → `level: "C1"` etc. |
| "Word with a history" card | `word` (change it monthly, it's good for Google too) |

## Adding a photo later
Upload the photo to this repository (**Add file → Upload files**) and tell Claude its name. Claude will place it on the page.
