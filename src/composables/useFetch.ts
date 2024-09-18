// fetch.js
import { Ref, ref } from "vue";
import { FetchResult } from "../types";

export function useFetch(url: string) {
  const data = ref(null);
  const error = ref(null);
  const refreshFacts = async (
    facts: Ref<FetchResult>,
    image: Ref<FetchResult>
  ) => {
    facts.value = useFetch("https://dogapi.dog/api/facts");
    image.value = useFetch("https://random.dog/woof.json");
  };

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error, fetch, refreshFacts };
}
