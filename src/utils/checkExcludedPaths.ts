import { matchPath } from "react-router-dom";

export const checkExcludedPaths = (list:string[], pathname:string) => {
  return !list.some(exclusion => matchPath(exclusion, pathname));
};
