import Changelog from "../components/Changelog/Changelog"
import { useRouter } from "next/router"
import { useIntl } from "react-intl"

import "../_globals.js"

ChangelogPage.title = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.title_changelog" });
}

ChangelogPage.description = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.description_changelog" });
}

export default function ChangelogPage() {
  const { locales } = useRouter();

  return (
    <>
      <Changelog locales = {[...locales]} is_default_opened={true}/>
    </>
  );
}
