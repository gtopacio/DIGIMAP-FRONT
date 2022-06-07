export default function Banner() {
    return (
        <div class="h-42 w-full bg-white relative flex overflow-hidden">
            <div class="w-full h-full flex flex-col justify-between">
                <header class="h-16 w-full flex items-center relative justify-start px-5 space-x-10 bg-gray-800">
                    <div class="flex flex-shrink-0 items-center space-x-4 text-white">
                        <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
                        <div class="flex flex-col items-start ">
                        <div class="text-3xl font-medium ">3D Picture Converter</div>
                        <div class="text-sm font-regular">G.E.P. Studios</div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}
