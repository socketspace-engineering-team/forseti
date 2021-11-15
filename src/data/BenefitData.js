import {IoShieldSharp, IoTrendingUpOutline,  IoWater, IoRepeatOutline} from 'react-icons/io5';
import { FaDollarSign, FaGift, FaPlus } from "react-icons/fa";
import fireMove from '../images/icon/firemove1.png';

export const benefitData = [
    {
        id:"1",
        animation: "fade-right",
        description: "Proteksi terhadap nilai aset.",
        icon: <IoShieldSharp color="#317481" fontSize="72px" />
    },
    {
        id:"2",
        animation: "fade-up",
        description: "Hepyer Deflasi Dengan melakukan pembakaran token secara bertahap hingga 30% dari Jumlah Supply.",
        icon: <IoTrendingUpOutline color="#317481" fontSize="72px" />
    },
    {
        id:"3",
        animation: "fade-left",
        description: "Pemberlakukan pajak sebanyak 12% apabila melakukan penjualan token.",
        icon: <FaDollarSign color="#317481" fontSize="72px"/> 
    },
    {
        id:"4",
        animation: "fade-left",
        description: "Auto Burn sebanyak 3% dan 2% hadiah kepada holder dari setiap transaksi penjualan yang terjadi.",
        icon: <> <img src={fireMove} alt="Forseti Auto Burn" style={{ width: '80px'}}/> <FaPlus color="#fff" fontSize="24px"/> <FaGift color="#317481" fontSize="72px"/> </>
    },
    {
        id:"5",
        animation: "fade-up",
        description: "Auto Liquidity Pool 3% dari setiap transaksi jual beli.",
        icon: <IoWater color="#317481" fontSize="72px"/>
    },
    {
        id:"6",
        animation: "fade-right",
        description: "Pembelian Kembali (Buyback) Token secara berkala. Sebuah langkah besar untuk menjaga nilai aset token agar tetap memberikan keuntungan bagi pemengang token.",
        icon: <IoRepeatOutline color="#317481" fontSize="72px"/>
    },
]