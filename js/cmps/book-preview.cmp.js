export default {
    props: ['book'],
    template: `
        <div class="book-preview">
            <h1>{{book.title}}</h1>
            <h3>Price : {{bookPrice}}</h3>
            <img :src="thumbnail"/>
        </div>
    `,
    data() {
        return {
            thumbnail: this.book.thumbnail
        }
    },
    computed: {
        bookPrice() {
            const amount = this.book.listPrice.amount;
            switch (this.book.listPrice.currencyCode) {
                case 'EUR':
                    return amount + ' €';
                case 'USD':
                    return amount + ' $';
                case 'ILS':
                    return amount + ' ₪';
                default:
                    return amount + ' ₪';
            };
        }
    }
}