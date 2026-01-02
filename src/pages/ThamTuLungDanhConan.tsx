import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  apiGetMovie,
  apiGetToken,
  apiGetWatchUrl,
  getEpisodeNumber,
  SafeEpisode,
  SafeMovieResponse,
} from "@/lib/phimapi";

const SLUG = "tham-tu-lung-danh-conan";

const FIXED_EPISODES_HTML = `
<div class="row">
    <!-- Upcomming Movies -->
    <div class="col-md-12 col-sm-12">
        <div class="latest-movie movie-opt">
            <div class="movie-heading overflow-hidden"> <span>Lồng Tiếng FM</span>
                <div class="disable-bottom-line"></div>
            </div>
        </div>
    </div>
	
	 	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=4ycwq8p8kqhx">Tập 771</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=oem7lbmx8rgu">Tập 772</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=jl6iali1pvea">Tập 773</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=1v9scrnb2xa4">Tập 774</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=tfzw0hzc6v7z">Tập 775</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=msksahp123lm">Tập 776</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=g6j9c4kbxhg1">Tập 777</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=vtc800oeq8qc">Tập 778</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=bg2o9zjmlon2">Tập 779</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=i7g3a74d7m5z">Tập 780</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ywp0pw6vl5iq">Tập 781</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=wqu7dn55zxik">Tập 782</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=chnzph5h4b3m">Tập 783</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=wfzugj4rr3jq">Tập 784</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=tbyt16gxydpy">Tập 785</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=jqwhrskyzo58">Tập 786</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=jfztu0unuia8">Tập 787</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=cg2xs6s8h7pa">Tập 788</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ztkn66in19pr">Tập 789</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=qc76ry3jhciz">Tập 790</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zpzm6ry4uqev">Tập 791</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=7k7om75lqj93">Tập 792</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=7epis98ccjeh">Tập 793</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=i2xzulna7rlj">Tập 794</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ozpr7x3kiyue">Tập 795</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=vt3f3470ljln">Tập 796</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=tc1gx7lrgu25">Tập 797</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=h6kkhqaoj03f">Tập 798</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=x6t8nyazt6i2">Tập 799</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=t6td7gtd9xe4">Tập 800</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=v5pil5axz7ov">Tập 801</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ta6ncddaarrj">Tập 802</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=2k9xr4hnu5kj">Tập 803</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=fjhv5nmw2f7m">Tập 804</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=lcx12ncsi59k">Tập 805</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=3lfngsi9qpez">Tập 806</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ruvffiu5fob5">Tập 807</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=cnewstqm72id">Tập 808</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=xwic2d1quiby">Tập 809</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=koseql3wplel">Tập 810</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=5w3cl7ul6tkh">Tập 811</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=t1cl1858z7w1">Tập 812</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=fix8snt3krrj">Tập 813</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=82gma5w7t0zu">Tập 814</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=4jpc62ivhgdy">Tập 815</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=u2v3uy0d6pfw">Tập 816</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zgxpf5ha1309">Tập 817</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=gbjsybyfb7xw">Tập 818</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=p57xocpklnxz">Tập 819</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ugnlimku379e">Tập 820</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=j51lotvpgy91">Tập 821</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=87o26yx8jld9">Tập 822</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=w5uy7h9c3vss">Tập 823</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=v13y0gm3b1b0">Tập 824</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=f4zettji1efy">Tập 825</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=vau9r2c10dmh">Tập 826</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=98bdo3p20qq1">Tập 827</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=k0ogpsxbb3sj">Tập 828</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=w902dvol8bkw">Tập 829</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=gtxhcpdva49p">Tập 830</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=qys5xs234b8j">Tập 831</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=3611zwh0eu9q">Tập 832</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=e2wu3ucsgfq4">Tập 833</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=8sej61mt0v2b">Tập 834</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zi7kuson34l1">Tập 835</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=uvgf110314vm">Tập 836</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=8gg12dhzve0l">Tập 837</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=4o2c40ndmbrp">Tập 838</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=egig1yh35yhp">Tập 839</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=kqxgktrtxrfu">Tập 840</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=p9q34bs7p5vn">Tập 841</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=toajm6rqifmf">Tập 842</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=sbjvem0ckdhq">Tập 843</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=w0pm7ddw3bml">Tập 844</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=6k57p76gijzs">Tập 845</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=8nwvy654bz7h">Tập 846</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=eosz02pqm413">Tập 847</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=jzvkr8v0bccs">Tập 848</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ozoxqtnekku8">Tập 849</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=xzz4ykgl6noo">Tập 850</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=2dpyqu8ziyki">Tập 851</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=io8up1l9iphq">Tập 852</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=481hkg8iam6w">Tập 853</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=slxo5tbsjwag">Tập 854</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=cbdfiov4vjg7">Tập 855</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=el5k19m3ytae">Tập 856</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=17xzjl97g6hv">Tập 857</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=0tce2m02rkmw">Tập 858</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=iympobpvo9vv">Tập 859</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=gj96o13oft8g">Tập 860</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=5z9resy63pl5">Tập 861</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ikog5spgd4tc">Tập 862</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=8f6zg80hwx3l">Tập 863</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=fpzwe9og3z6x">Tập 864</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=8woxm64fs25l">Tập 865</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=lwn4b5l9ay5h">Tập 866</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=py8gg6ayhsk6">Tập 867</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=1k4oalpvxqbj">Tập 868</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=4vx3vnir6v20">Tập 869</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=1x9ufwqdv22t">Tập 870</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=gw0zymu0y96w">Tập 871</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=v8psuxd0meqt">Tập 872</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=425r4l7m2two">Tập 873</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=akmzd9dhrnya">Tập 874</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=f4q6wk2hvvup">Tập 875</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=50gtflt6slx6">Tập 876</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=gqohayuqrgap">Tập 877</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=fwjr36egf0cz">Tập 878</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=cwc297v90gp2">Tập 879</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=dju92gmh7b14">Tập 880</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=s82pg1oua7em">Tập 881</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=pupz8hchvgrm">Tập 882</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=fp54stw8g0wd">Tập 883</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=t3ikhb19rdkl">Tập 884</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=m9vg6puwuw5g">Tập 885</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=trl4yt00s5en">Tập 886</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=r2b2pjyftrkc">Tập 887</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=q9pd8c6d4455">Tập 888</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zfq0gigvrwp8">Tập 889</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=2cem1jy7zyel">Tập 890</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=3m2b5vrqf734">Tập 891</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=megncgjem33j">Tập 892</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ny889i1z7jpx">Tập 893</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=rxyssa78k8jv">Tập 894</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=xs2j1cqcg0xb">Tập 895</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=74uinuij38yu">Tập 896</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=qg3w2j7y0io6">Tập 897</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=t0ra8rh8w1ox">Tập 898</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=4ihncqrvv9oj">Tập 899</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ehx5qppjkw23">Tập 900</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=swha14tbz87o">Tập 901</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=brjvyvm5vvzm">Tập 902</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=8lraub8lxzg8">Tập 903</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ec8cpb7ophuo">Tập 904</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=qz4tk4nr2it9">Tập 905</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=i8ajao4nn21z">Tập 906</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=n0w35wt75ljd">Tập 907</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=cxz73x9k1e47">Tập 908</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=syjftd2l0tro">Tập 909</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=gssbm53q200b">Tập 910</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=8ftrh1wzbp88">Tập 911</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zbp0j1ola6zn">Tập 912</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ldiomjefytph">Tập 913</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=knba3wx2vp9u">Tập 914</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zfkfvtxjco5u">Tập 915</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=d7z3acm32ybo">Tập 916</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=7eatc51wlpr8">Tập 917</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=bgysessxdqp4">Tập 918</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=xacnk459u25w">Tập 919</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=9535ysnb4i35">Tập 920</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=5z5pzx4bflcb">Tập 921</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ojcy7ng8z5b6">Tập 922</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=k550b4urp7y8">Tập 923</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=nocuy48m4xxy">Tập 924</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=9w53hytkaf3g">Tập 925</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=yp1hfxnnlviq">Tập 926</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=0p9i68tam4k3">Tập 927</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=5f7eyhixxlhj">Tập 928</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ywvjxkoq7f3s">Tập 929</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=rwspn6z6bb05">Tập 930</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=83y1y9i7pf8z">Tập 931</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=1wuxd8w6yw9w">Tập 932</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ch7rr0pym15t">Tập 933</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=mh0fwd8ew4f9">Tập 934</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=fh9lju42vga8">Tập 935</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=wjkfe7f8fezb">Tập 936</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ccxkfhvkynvu">Tập 937</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=owu6obxxazmy">Tập 938</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=t4gkf8m9soww">Tập 939</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=5y6pmm0wdarc">Tập 940</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=9s2qflts5tv4">Tập 941</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=n82ufklyix34">Tập 942</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=6ajsda5qobbl">Tập 943</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=8njvwflrl2c6">Tập 944</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=q0z2yc4l39k2">Tập 945</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=4kguubztlmgc">Tập 946</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=a660qstnh6dx">Tập 947</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=vwf0w8kfifvh">Tập 948</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=t8hs25b2g0fb">Tập 949</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=3jx7684td6p3">Tập 950</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=fqtxuufxtwep">Tập 951</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=1hg3mbye5rye">Tập 952</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=u44zc2jl1eae">Tập 953</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=9pdsbuis73hl">Tập 954</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=tyouib090tkm">Tập 955</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=2his3ikpl1ut">Tập 956</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=qx44oyudnwwe">Tập 957</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=61kpxcsvud6q">Tập 958</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=0prdlvsnf7wa">Tập 959</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=o22mpd8n6qxg">Tập 960</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=89oxsh7xkrwr">Tập 961</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ihjgscezjugo">Tập 962</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=niudyqvnxv79">Tập 963</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ovjptn51yce8">Tập 964</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=sv2545y8a891">Tập 965</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=nybpunln192t">Tập 966</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ibni8yifcyvo">Tập 967</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=0nmpqs6up1gj">Tập 968</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=q7tmesca1sfw">Tập 969</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=oz645l3yd4pw">Tập 970</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=lhx6l0bl6gmb">Tập 971</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=02k8w00znoya">Tập 972</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=46i3ufic3qjb">Tập 973</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=np86a8zzpdmw">Tập 974</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=2e3mkbyoo6nf">Tập 975</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=wgshepkirclq">Tập 976</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=5hyr4itg002m">Tập 977</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=ypkfzfwmec2t">Tập 978</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=99l0utb7mw34">Tập 979</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=9j9vwcpxou3a">Tập 980</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=2i7831ksa5ax">Tập 981</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=bkhbal37h677">Tập 982</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=41bsh7qx3ykz">Tập 983</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=2fi1yt0occ8f">Tập 984</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=4m26bdomdcmv">Tập 985</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=vvmbi535m6mn">Tập 986</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=02vu2alp2b4u">Tập 987</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=l87q7sn6lae8">Tập 988</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=vngh1pb36fup">Tập 989</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=jjqr40vf4tcm">Tập 990</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=eosox8bwnozc">Tập 991</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zbdakc6tox7h">Tập 992</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=6vjn196vlqzo">Tập 993</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zk2nneham2jv">Tập 994</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=pzt0ndx71r5u">Tập 995</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=gypcf4p1g83s">Tập 996</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=o9wznxsx8wse">Tập 997</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=m9wrfqttoucm">Tập 998</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=cadyonui04w6">Tập 999</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=fzk5sfx03yj0">Tập 1000</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=y3vlgj7i9y0p">Tập 1001</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=j4ft5j3ovn9i">Tập 1002</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=knixglb5965z">Tập 1003</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=zviaghx248gj">Tập 1004</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=gi58jt22wkzu">Tập 1005</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=qdjyjgc4cmix">Tập 1006</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=sffc6cxgrrah">Tập 1007</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=5zr92jcj8t43">Tập 1008</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=xn62csvxn5ay">Tập 1009</a>
	   	     
	<a class="btn btn-default btn-tags btn-sm" href="https://phimtuoitho.tv/watch/tham-tu-lung-danh-conan-detective-conan-series.html?key=crrrvutvykxo">Tập 1010</a>
	   	   
</div>
`;

function parseFixedEpisodes(html: string) {
  const eps: SafeEpisode[] = [];
  const re = /<a[^>]+href=["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const href = m[1];
    const text = m[2].trim();
    const keyMatch = href.match(/[?&]key=([^&]+)/);
    const key = keyMatch ? keyMatch[1] : href;
    eps.push({
      name: text,
      slug: `kdz-longtieng-${key}`,
      filename: href,
    } as SafeEpisode);
  }
  return eps;
}

export default function Conan() {
  const [data, setData] = useState<SafeMovieResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const [serverIndex, setServerIndex] = useState(0);
  const [pickerOpen, setPickerOpen] = useState(false);

  const [playerUrl, setPlayerUrl] = useState<string>("");
  const [playerLoading, setPlayerLoading] = useState(false);

  const playerRef = useRef<HTMLDivElement | null>(null);
  const lastLoadedRef = useRef<string>("");

  // Crop / iframe viewport controls
  const [cropEnabled, setCropEnabled] = useState(true);
  const [cropX, setCropX] = useState(-220);
  const [cropY, setCropY] = useState(-140);
  const [cropScale, setCropScale] = useState(0.9);

  const [searchParams, setSearchParams] = useSearchParams();
  const epSlugFromUrl = searchParams.get("ep") || "";

  useEffect(() => {
    const ac = new AbortController();
    setLoading(true);
    setError("");

    apiGetMovie(SLUG, ac.signal)
      .then((json) => {
        if (!json?.status) throw new Error(json?.msg || "API error");
        setData(json);
        setServerIndex(0);
      })
      .catch((e: any) => {
        if (e?.name !== "AbortError") setError(String(e?.message || e));
      })
      .finally(() => setLoading(false));

    return () => ac.abort();
  }, []);

  const movie = data?.movie;
  const apiServers = data?.episodes || [];
  const fixedServer = useMemo(
    () => ({ server_name: "Lồng Tiếng FM", server_data: parseFixedEpisodes(FIXED_EPISODES_HTML), synthetic: true }),
    []
  );

  const servers = useMemo(() => {
    const mapped = apiServers.map((s) => {
      const name = String(s.server_name || "").toLowerCase();
      if (name.includes("hà nội") && name.includes("lồng tiếng")) {
        return {
          ...s,
          server_name: "#TPHCM (Lồng Tiếng)",
          server_data: fixedServer.server_data,
        };
      }
      return s;
    });

    if (!mapped.some((s) => String(s.server_name || "").toLowerCase().includes("lồng tiếng fm")) && !mapped.some((s) => String(s.server_name || "").toLowerCase().includes("lồng tiếng"))) {
      return [fixedServer, ...mapped];
    }

    return mapped;
  }, [fixedServer, apiServers]);

  const currentServer = servers[serverIndex];

  const episodesSorted: SafeEpisode[] = useMemo(() => {
    const list = currentServer?.server_data ? [...currentServer.server_data] : [];
    list.sort((a, b) => getEpisodeNumber(a.name) - getEpisodeNumber(b.name));
    return list;
  }, [currentServer]);

  const selectedEpisode = useMemo(() => {
    if (!epSlugFromUrl) return null;
    return episodesSorted.find((x) => x.slug === epSlugFromUrl) || null;
  }, [episodesSorted, epSlugFromUrl]);

  useEffect(() => {
    if (!data) return;
    if (!epSlugFromUrl) return;
    if (playerLoading) return;

    const target = episodesSorted.find((x) => x.slug === epSlugFromUrl);
    if (!target) return;

    if (lastLoadedRef.current === `${serverIndex}:${target.slug}`) return;
    lastLoadedRef.current = `${serverIndex}:${target.slug}`;

    loadEpisode(target);
  }, [data, epSlugFromUrl, serverIndex, episodesSorted]);

  async function loadEpisode(ep: SafeEpisode) {
    try {
      setPlayerLoading(true);
      setError("");
      setPlayerUrl("");

      setSearchParams({ ep: ep.slug }, { replace: true });

      if (ep.filename && (ep.filename.startsWith("http://") || ep.filename.startsWith("https://"))) {
        setPlayerUrl(ep.filename);
        setPickerOpen(false);
        setTimeout(() => playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
        return;
      }

      const tk = await apiGetToken();
      const r = await apiGetWatchUrl(SLUG, ep.slug, tk.token);

      setPlayerUrl(r.url);
      setPickerOpen(false);

      setTimeout(() => playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
    } catch (e: any) {
      setError(String(e?.message || e));
    } finally {
      setPlayerLoading(false);
    }
  }

  if (loading) return <div className="p-6 text-sm text-muted-foreground">Loading Api Bro..</div>;

  if (error && !movie) {
    return (
      <div className="p-6">
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm">Lỗi: {error}</div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060914]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-32 right-[-220px] h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-220px] left-[-220px] h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-3 pb-12 pt-6 md:px-6">
        <div className="mb-4 text-xs text-white/60">
          Trang chủ <span className="mx-2 text-white/30">›</span> Hoạt Hình{" "}
          <span className="mx-2 text-white/30">›</span> {movie.year} <span className="mx-2 text-white/30">›</span>{" "}
          {movie.country?.[0]?.name || "—"} <span className="mx-2 text-white/30">›</span>{" "}
          <span className="text-white/90">{movie.name}</span>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4 shadow-[0_20px_90px_rgba(0,0,0,0.55)] backdrop-blur md:p-6">
          <div className="grid gap-5 md:grid-cols-[300px_1fr]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
              <img
                src={movie.poster_url || movie.thumb_url}
                alt={movie.name}
                className="h-[380px] w-full object-cover"
                loading="lazy"
              />
              <div className="flex gap-2 p-3">
                <button
                  className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:opacity-95"
                  onClick={() => setPickerOpen(true)}
                >
                  Chọn tập để xem
                </button>
                <button
                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                  onClick={() => playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  Xem
                </button>
              </div>
            </div>

            <div>
              <div className="mb-2 text-center">
                <div className="text-xl font-extrabold tracking-wide text-white md:text-3xl">{movie.name}</div>
                <div className="text-sm text-white/60 italic">{movie.origin_name}</div>
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-black/25">
                <InfoRow label="Tình trạng" value={movie.episode_current} />
                <InfoRow label="Số tập" value={movie.episode_total} />
                <InfoRow label="Thời lượng" value={movie.time} />
                <InfoRow label="Năm phát hành" value={String(movie.year)} />
                <InfoRow label="Chất lượng" value={movie.quality} />
                <InfoRow label="Ngôn ngữ" value={movie.lang} />
                <InfoRow label="Đạo diễn" value={(movie.director || []).join(", ") || "Đang cập nhật"} />
                <InfoRow label="Diễn viên" value={(movie.actor || []).join(", ")} />
                <InfoRow label="Thể loại" value={(movie.category || []).map((c) => c.name).join(", ")} />
                <InfoRow label="Quốc gia" value={(movie.country || []).map((c) => c.name).join(", ")} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Chip>{movie.status === "ongoing" ? "Đang cập nhật" : "Hoàn thành"}</Chip>
                <Chip>{movie.quality}</Chip>
                <Chip>{movie.lang}</Chip>
                <Chip>{movie.time}</Chip>
              </div>

              {error && (
                <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-200">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 backdrop-blur md:p-6">
          <div className="mb-2 text-sm font-semibold text-white/90">Nội dung phim</div>
          <div className="text-sm leading-6 text-white/70">{movie.content}</div>
        </div>

        <div
          ref={playerRef}
          className="mt-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 backdrop-blur md:p-6"
        >
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm font-semibold text-white/90">
              Xem phim:{" "}
              {selectedEpisode ? (
                <span className="text-violet-300">{selectedEpisode.name}</span>
              ) : (
                <span className="text-white/50">Chưa chọn tập</span>
              )}{" "}
              <span className="mx-2 text-white/25">|</span> Server:{" "}
              <span className="text-white/80">{currentServer?.server_name || "—"}</span>{" "}
              <span className="ml-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
                #Vietsub
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {servers.map((s, idx) => (
                <button
                  key={`${s.server_name}-${idx}`}
                  onClick={() => {
                    setServerIndex(idx);
                    setPickerOpen(false);
                    setPlayerUrl("");
                    lastLoadedRef.current = "";
                  }}
                  className={[
                    "rounded-2xl border px-3 py-1.5 text-xs transition",
                    idx === serverIndex
                      ? "border-transparent bg-white/15 text-white"
                      : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10",
                  ].join(" ")}
                >
                  {s.server_name}
                </button>
              ))}

              <button
                className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 hover:opacity-95"
                onClick={() => setPickerOpen(true)}
              >
                Chọn tập
              </button>
            </div>
          </div>

          {!playerUrl ? (
            <div className="grid place-items-center rounded-3xl border border-dashed border-white/15 bg-black/35 py-16 text-center">
              <div className="max-w-md px-4">
                <div className="text-base font-semibold text-white">Chưa chọn tập</div>
                <div className="mt-2 text-sm text-white/70">Nhấn “Chọn tập” để bắt đầu xem.</div>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <button
                    className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:opacity-95"
                    onClick={() => setPickerOpen(true)}
                  >
                    Mở danh sách tập
                  </button>

                  {selectedEpisode && (
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 disabled:opacity-50"
                      onClick={() => loadEpisode(selectedEpisode)}
                      disabled={playerLoading}
                    >
                      Phát tập đã chọn
                    </button>
                  )}
                </div>

                {playerLoading && <div className="mt-4 text-xs text-white/60">Đang lấy link xem...</div>}
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
              {String(currentServer?.server_name || "").toLowerCase().includes("lồng tiếng") && (
                <div className="p-3 flex items-center justify-between">
                  <div className="text-xs text-white/70">Hiển thị: {cropEnabled ? "Chế độ crop" : "Gốc"}</div>
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/85 hover:bg-white/10"
                      onClick={() => setCropEnabled((s) => !s)}
                    >
                      {cropEnabled ? "Tắt crop" : "Bật crop"}
                    </button>
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 hover:bg-white/10"
                      onClick={() => setCropScale((s) => Math.max(0.5, +(s - 0.1).toFixed(2)))}
                    >
                      −
                    </button>
                    <div className="text-xs text-white/80 px-2">x{cropScale.toFixed(2)}</div>
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 hover:bg-white/10"
                      onClick={() => setCropScale((s) => Math.min(3, +(s + 0.1).toFixed(2)))}
                    >
                      +
                    </button>
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 hover:bg-white/10"
                      onClick={() => setCropY((v) => v - 20)}
                      title="Shift up"
                    >
                      ↑
                    </button>
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 hover:bg-white/10"
                      onClick={() => setCropY((v) => v + 20)}
                      title="Shift down"
                    >
                      ↓
                    </button>
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 hover:bg-white/10"
                      onClick={() => setCropX((v) => v - 20)}
                      title="Shift left"
                    >
                      ←
                    </button>
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 hover:bg-white/10"
                      onClick={() => setCropX((v) => v + 20)}
                      title="Shift right"
                    >
                      →
                    </button>
                    <button
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/85 hover:bg-white/10"
                      onClick={() => {
                        setCropX(0);
                        setCropY(0);
                        setCropScale(1.6);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}

              {String(currentServer?.server_name || "").toLowerCase().includes("lồng tiếng") && cropEnabled ? (
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                  <iframe
                    title="player"
                    src={playerUrl}
                    style={{
                      position: "absolute",
                      left: cropX,
                      top: cropY,
                      transform: `scale(${cropScale})`,
                      transformOrigin: "top left",
                      width: "1600px",
                      height: "900px",
                      border: 0,
                    }}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <iframe
                  title="player"
                  src={playerUrl}
                  className="aspect-video w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          )}
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 backdrop-blur md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm font-semibold text-white/90">Danh sách tập</div>
            <button
              className="h-9 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:opacity-95"
              onClick={() => setPickerOpen(true)}
            >
              Mở danh sách tập
            </button>
          </div>
          <div className="mt-3 rounded-3xl border border-dashed border-white/15 bg-black/35 p-6 text-sm text-white/70">
            Danh sách tập đang được ẩn. Nhấn “Mở danh sách tập” để chọn tập bạn muốn xem.
          </div>
        </div>
      </div>

      <EpisodePickerModal
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        title={`Chọn tập • ${currentServer?.server_name || ""}`}
        episodes={episodesSorted}
        currentSlug={selectedEpisode?.slug || ""}
        onPick={(ep) => loadEpisode(ep)}
        loading={playerLoading}
      />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3 px-4 py-2 text-sm md:grid-cols-[180px_1fr]">
      <div className="text-white/55">{label}</div>
      <div className="text-white/90">{value || "—"}</div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function EpisodePickerModal({
  open,
  onClose,
  title,
  episodes,
  currentSlug,
  onPick,
  loading,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  episodes: SafeEpisode[];
  currentSlug: string;
  onPick: (ep: SafeEpisode) => void;
  loading: boolean;
}) {
  const [search, setSearch] = useState("");
  const [jump, setJump] = useState("");
  const [p, setP] = useState(1);
  const SIZE = 120;

  useEffect(() => {
    if (open) {
      setSearch("");
      setJump("");
      setP(1);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return episodes;
    return episodes.filter((ep) => {
      const n = getEpisodeNumber(ep.name);
      return ep.name.toLowerCase().includes(s) || ep.slug.toLowerCase().includes(s) || String(n).includes(s);
    });
  }, [episodes, search]);

  const total = Math.max(1, Math.ceil(filtered.length / SIZE));
  const ps = Math.min(Math.max(1, p), total);

  const items = useMemo(() => {
    const start = (ps - 1) * SIZE;
    return filtered.slice(start, start + SIZE);
  }, [filtered, ps]);

  function doJump() {
    const num = Number(jump);
    if (!Number.isFinite(num)) return;
    const target = episodes.find((ep) => getEpisodeNumber(ep.name) === num);
    if (!target) return;
    onPick(target);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 w-[min(1040px,94vw)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1220] to-[#070b12] p-4 shadow-[0_35px_140px_rgba(0,0,0,0.65)] md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-base font-semibold text-white">{title}</div>
            <div className="mt-1 text-xs text-white/60">
              Click để phát. (Có {filtered.length} tập){loading ? " • Đang lấy link..." : ""}
            </div>
          </div>
          <button
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/85 hover:bg-white/10 disabled:opacity-50"
            onClick={onClose}
            disabled={loading}
          >
            Đóng
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setP(1);
            }}
            placeholder="Tìm tập... (vd: 1186)"
            className="h-10 flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 text-sm text-white/90 outline-none placeholder:text-white/35 focus:border-violet-400/40"
          />

          <input
            value={jump}
            onChange={(e) => setJump(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") doJump();
            }}
            placeholder="Nhảy tới (vd: 1000)"
            className="h-10 w-44 rounded-2xl border border-white/10 bg-white/5 px-3 text-sm text-white/90 outline-none placeholder:text-white/35 focus:border-violet-400/40"
          />

          <button
            className="h-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:opacity-95 disabled:opacity-50"
            onClick={doJump}
            disabled={loading}
          >
            Đi
          </button>

          <button
            className="h-10 rounded-2xl border border-white/10 bg-white/5 px-3 text-xs text-white/85 hover:bg-white/10 disabled:opacity-40"
            disabled={ps <= 1 || loading}
            onClick={() => setP((x) => Math.max(1, x - 1))}
          >
            Trước
          </button>

          <div className="px-1 text-xs text-white/65">
            Trang <span className="text-white">{ps}</span> / {total}
          </div>

          <button
            className="h-10 rounded-2xl border border-white/10 bg-white/5 px-3 text-xs text-white/85 hover:bg-white/10 disabled:opacity-40"
            disabled={ps >= total || loading}
            onClick={() => setP((x) => Math.min(total, x + 1))}
          >
            Sau
          </button>
        </div>

        <div className="mt-4 max-h-[62vh] overflow-auto rounded-3xl border border-white/10 bg-black/25 p-3">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10">
            {items.map((ep) => {
              const active = ep.slug === currentSlug;
              return (
                <button
                  key={ep.slug}
                  onClick={() => onPick(ep)}
                  className={[
                    "rounded-2xl border px-2 py-2 text-xs transition disabled:opacity-50",
                    active
                      ? "border-transparent bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-violet-500/20"
                      : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10",
                  ].join(" ")}
                  title={ep.filename}
                  disabled={loading}
                >
                  {ep.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 text-xs text-white/45">Mẹo: gõ “1000” để lọc nhanh.</div>
      </div>
    </div>
  );
}
