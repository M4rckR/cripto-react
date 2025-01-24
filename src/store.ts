import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency, CryptoPrice, Pair } from "./types"
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService"

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    result : CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair:Pair) => Promise<void>
}

export const useCriptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {
        CHANGEPCT24HOUR: '',
        HIGHDAY: '',
        LASTUPDATE: '',
        LOWDAY: '',
        PRICE: '',
        IMAGEURL: ''
    },
    loading: false,
    fetchCryptos: async() => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(()=> ({
            result,
            loading: false
        }))
    }
}))) 