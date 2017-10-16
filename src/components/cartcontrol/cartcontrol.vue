<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease " v-show="food.count>0" @click="decreaseCart">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
export default {
    props: {
        food: {
            type: Object
        }
    },
    methods: {
        // 增加按钮
        addCart(event) {
            if (!event._constructed) {
                return;
            }
            // 当我们给一个对象添加一个它不存在的属性的时候 ; 在检测不到变化的
            // 当我们添加一个属性的时候 ; 我们想要监测到这个属性的变化 ; 使用vue的set接口
            if (!this.food.count) {
                Vue.set(this.food, 'count', 1);
                // this.food.count = 1;
            } else {
                this.food.count++;
            }
            this.$emit('add', event.target);
        },
        // 减少
        decreaseCart(event) {
            if (!event._constructed) {
                return;
            }
            if (this.food.count) {
                this.food.count--;
            }
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin';

.cartcontrol {
    font-size: 0;

    .cart-decrease {
        display: inline-block;
        padding: 6px;
        transition: all 0.4s linear;

        &.move-enter-active, &.move-leave-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }

        .inner {
            display: inline-block;
            line-height: 24px;
            font-size: 24px;
            color: rgb(0, 160, 220);
            transition: all 0.4s linear;
            transform: rotate(0);
        }

        &.move-enter, &.move-leave-to {
            opacity: 0;
            transform: translate3d(24px, 0, 0);

            .inner {
                transform: rotate(180deg);
            }
        }
    }

    .cart-count {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        padding-top: 6px;
        line-height: 24px;
        text-align: center;
        font-size: 10px;
        color: rgb(147, 153, 159);
    }

    .cart-add {
        display: inline-block;
        padding: 6px;
        line-height: 24px;
        font-size: 24px;
        color: rgb(0, 160, 220);
    }
}
</style>