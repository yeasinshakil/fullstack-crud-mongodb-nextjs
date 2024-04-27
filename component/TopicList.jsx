import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

export default async function TopicsList() {

    return (
        <>

            <div
                // key={t._id}
                className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
            >
                <div>
                    <h2 className="font-bold text-2xl">New work</h2>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae unde velit vero aspernatur eveniet porro aut reprehenderit facere officia voluptatem!</div>
                </div>

                <div className="flex gap-2">
                    <RemoveBtn />
                    <Link href={`/editTopic/123`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>

        </>
    );
}