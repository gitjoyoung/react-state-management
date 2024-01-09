import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  // 비동기로 데이터를 가져오는 함수를 정의합니다.
  const fetchtempData = async () => {
    const res = await fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    );
    return res.json();
  };

  // useQuery 훅을 사용하여 데이터를 가져오고 상태를 관리
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchtempData,
  });

  // 로딩 중인 경우에는 "Loading..."을 반환합니다.
  if (isPending) return "Loading...";

  // 에러가 발생한 경우 에러 메시지를 반환합니다.
  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  console.log("isPending" + isPending);
  console.log("error" + error);
  console.log("isFetching" + isFetching);

  return (
    <>
      <div>
        <h3>https://api.github.com/repos/tannerlinsley/react-query</h3>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
        <ReactQueryDevtools initialIsOpen />
      </div>
    </>
  );
}

export default App;
