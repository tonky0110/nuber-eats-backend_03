import { Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entity";


@Resolver(of => Restaurant)
export class RestaurantsResolver {
    @Query(() => Boolean)
    isPizzaGood() {
        return true;
    }

    @Query(returns => Restaurant)
    myRestaurant(){
        return null;
    }
}