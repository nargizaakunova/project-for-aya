import classes from './SwiperSlider.module.css';

const SwiperSlider = (props) => {
  return (
    <div className={classes['swiper-slide']}>
      <div className={classes.thumbContainer}>
        <img src="https://picsum.photos/600/400" alt="Project" />
        <div class="projectInfo">
          <h2 class="serif">Project 1</h2>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlider;
