export class CounterService {
    counterInactive = 0;
    counterActive = 0;

    incrementInactive() {
        return ++this.counterInactive;
    }

    incrementActive() {
        return ++this.counterActive;
    }
}