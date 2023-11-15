import { Email as TEmail } from "../api/email/Email";

export const EMAIL_TITLE_FIELD = "address_1";

export const EmailTitle = (record: TEmail): string => {
  return record.address_1?.toString() || String(record.id);
};
