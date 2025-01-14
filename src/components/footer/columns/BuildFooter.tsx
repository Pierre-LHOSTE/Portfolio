import { projectsList } from "@/components/projects/list";
import ProjectStacks from "@/components/projects/stacks/ProjectStacks";
import { stackItem } from "@/components/stack/data";
import type { StackIdType } from "@/components/stack/stack";
import Tooltip from "@/components/tooltip/Tooltip";
import { useI18nContext } from "@/i18n/i18n-react";
import FooterColumns from "../footer-columns/FooterColumns";

export default function BuildFooter() {
  const { LL } = useI18nContext();

  return (
    <FooterColumns
      title={LL.footer.build.title()}
      urls={[
        {
          title: LL.footer.build.from(),
          url: "https://github.com/Pierre-LHOSTE/Portfolio",
          icon: {
            url: stackItem.github.styles.icon,
            invert: stackItem.github.styles.invert,
          },
        },
        {
          title: (
            <>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                {LL.footer.build.with()}
              </a>{" "}
              <Tooltip
                content={
                  <ProjectStacks
                    stacks={projectsList.portfolio.technologies.map(
                      (stack) => stackItem[stack as StackIdType]
                    )}
                  />
                }
              >
                ({LL.footer.build.and()})
              </Tooltip>
            </>
          ),
          url: "",
          icon: {
            url: stackItem.nextJs.styles.icon,
          },
        },
        {
          title: LL.footer.build.hosted(),
          url: "https://vercel.com/",
          icon: {
            url: stackItem.vercel.styles.icon,
          },
        },
      ]}
    />
  );
}
