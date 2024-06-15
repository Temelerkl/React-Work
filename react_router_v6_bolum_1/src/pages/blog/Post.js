import { useParams } from "react-router-dom";

export default function Post() {
  const { url, id } = useParams();

  return (
    <div>
      {/* URL parametrelerini doğru şekilde kullanın */}
      post page = {url} - {id}
    </div>
  );
}
