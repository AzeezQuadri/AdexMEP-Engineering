/**
 * Helper to construct Telegram deep links with pre-filled message text.
 * Uses official https://t.me/<username>?text=<encoded_text> standard format.
 */
export function createTelegramUrl(message?: string, username = 'adexcreativity'): string {
  const cleanUsername = username.replace(/^@/, '');
  if (!message || message.trim() === '') {
    return `https://t.me/${cleanUsername}`;
  }
  return `https://t.me/${cleanUsername}?text=${encodeURIComponent(message.trim())}`;
}

export function openTelegram(message?: string, username = 'adexcreativity') {
  const url = createTelegramUrl(message, username);
  window.open(url, '_blank', 'noopener,noreferrer');
}
