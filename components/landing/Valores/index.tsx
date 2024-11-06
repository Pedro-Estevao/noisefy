function Valores(){
    return(
        <section className="w-auto h-full flex justify-center items-start bg-noisefy-500 mt-20 mb-20">
            <div className="flex flex-col mt-12 mb-20   ">
                <h1 className="text-white text-center font-bold tracking-wide text-5xl mb-12" >Nossos Valores</h1>
                <div className="flex justify-around items-start gap-32 h-auto w-[70w]">
                    {/* Perguntar para o pedro pq quando coloco auto aqui na altura ele não funciona, pq queria deixar a altura automatica conforme os itens */}
                    <article className="h-auto w-[30vw] bg-noisefy-900 rounded-3xl flex justify-start items-center flex-col pr-4 pl-4">
                        <h3 className="text-3xl font-semibold text-white mt-7 mb-4">Light Plan</h3>
                        <p className="text-white"><span className="text-gray-600 line-through font-bold text-base">R$ 5,99</span><span className="font-bold text-6xl ml-3">R$ 1,99</span><span className="">/Mês</span></p>
                        <p className="text-center text-white mt-5">Ideal para quem está começando ou precisa de soluções simples.</p>
                        <div className="flex flex-col justify-center items-start mt-5 mb-7 gap-4">
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Conversão de cores limitada (até 50 imagens/mês)</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Pré-processamento básico de imagens (redimensionamento e normalização)</span>
                            </div>
                        </div>
                    </article>
                    <article className="h-auto w-[30vw] bg-noisefy-900 rounded-3xl flex justify-start items-center flex-col pr-4 pl-4">
                    <h3 className="text-3xl font-semibold text-white mt-7 mb-4">Pro Plan</h3>
                        <p className="text-white"><span className="text-gray-600 line-through font-bold text-base">R$ 9,99</span><span className="font-bold text-6xl ml-3">R$ 4,99</span><span className="">/Mês</span></p>
                        <p className="text-center text-white mt-5">Nossa solução completa para quem trabalha com imagens em alta escala.</p>
                        <div className="flex flex-col justify-center items-start mt-5 mb-7 gap-4">
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Conversão de cores limitada (até 50 imagens/mês)</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Pré-processamento avançado (remoção de ruído, redimensionamento, normalização)</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Geração de histogramas ilimitada</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Ferramentas de limiarização avançadas para segmentação precisa</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Acesso premium à galeria com armazenamento expandido (até 5GB)</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Suporte prioritário 24/7</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Atualizações e novos recursos exclusivos</span>
                            </div>
                            <div className="flex items-center">
                                <img src="/imgs/icon-verificar.png" alt="icone verificar" className="w-[25px] max-w-full h-auto" /> <span className="text-white ml-2">Pré-processamento básico de imagens (redimensionamento e normalização)</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}


export default Valores;