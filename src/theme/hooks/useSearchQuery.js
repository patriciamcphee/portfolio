import { useHistory, useLocation } from "@docusaurus/router";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
const SEARCH_PARAM_QUERY = "q";
const SEARCH_PARAM_CONTEXT = "ctx";
const SEARCH_PARAM_VERSION = "version";
function useSearchQuery() {
    const history = useHistory();
    const location = useLocation();
    const { siteConfig: { baseUrl }, } = useDocusaurusContext();
    const params = ExecutionEnvironment.canUseDOM ? new URLSearchParams(location.search) : null;
    const searchValue = params?.get(SEARCH_PARAM_QUERY) || "";
    const searchContext = params?.get(SEARCH_PARAM_CONTEXT) || "";
    const searchVersion = params?.get(SEARCH_PARAM_VERSION) || "";
    const getSearchParams = (searchValue) => {
        const searchParams = new URLSearchParams(location.search);
        if (searchValue) {
            searchParams.set(SEARCH_PARAM_QUERY, searchValue);
        }
        else {
            searchParams.delete(SEARCH_PARAM_QUERY);
        }
        return searchParams;
    };
    return {
        searchValue,
        searchContext,
        searchVersion,
        updateSearchPath: (searchValue) => {
            const searchParams = getSearchParams(searchValue);
            history.replace({
                search: searchParams.toString(),
            });
        },
        generateSearchPageLink: (searchValue) => {
            const searchParams = getSearchParams(searchValue);
            // Refer to https://github.com/facebook/docusaurus/pull/2838
            return `${baseUrl}search?${searchParams.toString()}`;
        },
    };
}
export default useSearchQuery;
