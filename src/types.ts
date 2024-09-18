import { Ref } from "vue";

export interface FavoriteFacts{
    fact:string;
    dogImg:string;
}

export type FetchResult = {
    data: Ref<any>;
    error: Ref<any>;
  };