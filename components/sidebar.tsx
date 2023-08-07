import NewsletterFormWidget from "./newsletter-form-widget";
import WorksWidget from "./works-widget";

export default function Sidebar() {
  return (
    <aside className="space-y-10 lg:pl-16 xl:pl-24">
      <NewsletterFormWidget />
      <WorksWidget />
    </aside>
  );
}
