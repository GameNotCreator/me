import french from "@/libs/fr";
import documents from "@/libs/fr-documents";
import photos from "@/libs/fr-photos";
import journey from "@/libs/fr-journey";

const dictionary = { ...french, ...documents, ...photos, ...journey };

export function translate(text, locale = "en") {
  if (locale !== "fr" || typeof text !== "string") return text;
  if (Object.hasOwn(dictionary, text)) return dictionary[text];
  const trimmed = text.trim();
  return Object.hasOwn(dictionary, trimmed) ? text.replace(trimmed, dictionary[trimmed]) : text;
}

const preservedFields = new Set(["id", "src", "href", "link", "projectLink", "previewLink", "appStoreLink", "category", "categories", "tags", "imageUrl", "imageFit", "imagePosition", "previewType", "previewDomain", "previewStack", "accent", "date", "demoCredentials"]);

export function localizeRecord(value, locale = "en", key = "") {
  if (locale !== "fr" || preservedFields.has(key)) return value;
  if (typeof value === "string") return translate(value, locale);
  if (Array.isArray(value)) return value.map((entry) => localizeRecord(entry, locale));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([field, entry]) => [field, localizeRecord(entry, locale, field)]));
  return value;
}
