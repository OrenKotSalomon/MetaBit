import axios from "axios"
import { storageService } from "./storage.service"

const RATE_DB = 'rate_db'
const MARKETPRICE_DB = 'marketprice_db'
const BLOCKSIZE_DB = 'blocksize_db'

export const bitcoinService = {
    getBitcoinExchange,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getBitcoinExchange() {
    const EXCHANGE_API_KEY = 'https://blockchain.info/tobtc?currency=USD&value=1&cors=true'
    let data = storageService.load(RATE_DB)
    try {
        if (!Math.abs(data)) {
            const response = await axios.get(EXCHANGE_API_KEY)
            storageService.save(RATE_DB, response.data)
            return response.data
        } else return data
    } catch (error) {

    }

}

async function getMarketPriceHistory() {
    const MARKETPRICE_API_KEY = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    let data = storageService.load(MARKETPRICE_DB)
    try {
        if (!data || !data.length) {
            const response = await axios.get(MARKETPRICE_API_KEY)
            storageService.save(MARKETPRICE_DB, response.data)
            return response.data
        } else return data
    } catch (error) {

    }

}

async function getAvgBlockSize() {
    const BLOCKSIZE_API_KEY = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'
    let data = storageService.load(BLOCKSIZE_DB)
    try {
        if (!data || !data.length) {
            const response = await axios.get(BLOCKSIZE_API_KEY)
            console.log(response.data);
            storageService.save(BLOCKSIZE_DB, response.data)
            return response.data
        } else return data
    } catch (error) {

    }
}
