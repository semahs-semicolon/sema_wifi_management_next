
import Header from "@/app/_ui/Header";
import {Fragment} from "react";
import {DisplayGraph} from "@/app/_ui/graph/NetworkGraph";

export default function Home() {
  return (
      <Fragment>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="w-full h-50">
                <DisplayGraph />
            </div>
          </main>
      </Fragment>

  );
}
