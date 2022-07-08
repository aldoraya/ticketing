import Header from 'next/head'
import NavBar from "../../components/NavBar";
import InfoKereta from "../../components/InfoKereta";
import PilihKereta from "../../components/PilihKereta";
import NavPesananKereta from "../../components/NavPesananKereta";
import PesananTiketMobile from '../../components/mobile/PesananTiketMobile';
import FilterKereta from '../../components/FilterKereta';

export default function tiket() {
    return (
        <section className="md:bg-slate-200">
        <Header>
          <title>Pemesanan Tiket</title>
        </Header>
        <PesananTiketMobile />
          <section className="hidden md:block">
            <NavBar />
            <InfoKereta />
            <NavPesananKereta />
              <div className="flex">
                <FilterKereta />
                <PilihKereta />
              </div>
          </section>
        </section>
    )
}