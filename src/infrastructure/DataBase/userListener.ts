import { EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
import { User } from "../../domain/entities/User.js";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
    
    baseEntity: User | null

    listenTo() {
        return User;
    }

    async beforeUpdate(event: UpdateEvent<User>){
        
        const user=await User.findOneBy({userId: event.entity?.userId})
        this.baseEntity=user
    }

    async afterUpdate(event: UpdateEvent<User>) {
        console.log('старая сущность', this.baseEntity);
        console.log('Новая сущность:', event.entity);
        console.log('измененные поля', event.updatedColumns);
    };

    async beforeInsert(event: InsertEvent<User>){
        console.log(event.entity)
    }

}