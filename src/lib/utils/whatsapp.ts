/**
 * WhatsApp Utilities
 */

export function generateWhatsAppLink(
  phoneNumber: string,
  message: string = '',
  encode: boolean = true
): string {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encode ? encodeURIComponent(message) : message;

  return `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

export function openWhatsApp(phoneNumber: string, message?: string) {
  const link = generateWhatsAppLink(phoneNumber, message);
  window.open(link, '_blank', 'noopener,noreferrer');
}
