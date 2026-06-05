import { StatsGroup } from '../Client/Pages/Home/MiddleStat';
import { StatsRing } from '../Client/Pages/Home/RingProgress';

import { StatsGridIcons } from '../Client/Pages/Home/Stats';
import { StatsGrid } from '../Client/Pages/Home/StatsCards';
import { StatsSegments } from '../Client/Pages/Home/StatsTable';
import classes from  './Styles/Home.module.css';
function HomeView(){
return(
 
   <>
  
   <div className={classes.main}>
  
<section className={classes.first}>
    <div className={classes.left}>
<StatsRing/>

    </div>
  <div className={classes.right}>
   <StatsGridIcons/>

    </div>
</section>

<section className={classes.first5}>
 <div className={classes.left1}>
    <StatsSegments/>

 </div>
  <div className={classes.middle1}>
    <StatsSegments/>
 </div>
  <div className={classes.right1}>
    <StatsSegments/>

    
 </div>
  <div className={classes.right1}>
    <StatsSegments/>

 </div>
</section>
  <section className={classes.bottom}>
        <StatsGrid/>
    </section>
<section className={classes.Three}>
    <StatsGroup/>

</section>
   </div>


   

   </>
)
}

export default HomeView;