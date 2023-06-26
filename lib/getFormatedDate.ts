export default function getFormatedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-Us", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
