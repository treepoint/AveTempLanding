import Changelog from "../components/Changelog/Changelog"
import { useRouter } from "next/router"

import "../_globals.js"

ChangelogPage.title = () => {
  return { id: "meta.title_changelog" };
}

ChangelogPage.description = () => {
  return { id: "meta.description_changelog" };
}

export default function ChangelogPage() {
  const { locales } = useRouter();

  return (
    <>
      <Changelog locales = {[...locales]}/>
    </>
  );
}
