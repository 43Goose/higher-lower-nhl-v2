import PlayercardLoading from "./playercard-loading";

export default function PlayercardsLoading() {
    return (
        <div className="h-[150%] w-full flex flex-col md:w-[150%] md:h-full md:flex-row">
            <PlayercardLoading />
            <PlayercardLoading unknown />
            <PlayercardLoading />
        </div>
    )
}