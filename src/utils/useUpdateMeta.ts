import { getStorage, ref, updateMetadata } from "firebase/storage";

export const useUpdateMeta = (path: string) => {
  const file = ref(getStorage(), path);

  const meta = {
    cacheControl: "public,max-age=7200",
    contentType: "image/jpeg",
  };

  updateMetadata(file, meta).then((m) => console.log(m));
};
