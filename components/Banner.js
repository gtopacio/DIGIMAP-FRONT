export default function Banner() {
    return (
        <div class="h-42 w-full bg-white relative flex overflow-hidden">
            <div class="w-full h-full flex flex-col justify-between">
                <header class="h-16 w-full flex items-center relative justify-start px-5 space-x-10 bg-gray-900">
                    <div class="flex flex-shrink-0 items-center space-x-4 text-white">
                        <a href="/"><img class="h-10 w-10 rounded-full" src="/fried-egg.png"></img></a>
                        <div class="flex flex-col items-start ">
                            <div class="text-3xl font-medium ">3D Picture Converter</div>
                            <div class="text-sm font-regular">4egg Studios</div>
                        </div>
                    </div>
                    <div class="justify-items-end flex flex-row text-white space-x-6">
                        <a class="text-m font-regular" href="http://localhost:3000/">Home</a>
                        <a class="text-m font-regular" href="http://localhost:3000/acknowledgements">Acknowledgements</a>
                    </div>
                </header>
            </div>
        </div>
    )
}
