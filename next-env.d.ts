/// <reference types="next" />
/// <reference types="next/types/global" />

interface BlogFrontMatter {
  __resourcePath: string;
  // And so on...
  title: string;
  blurb?: string;
  tag?: string;
}

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: BlogFrontMatter[];
}