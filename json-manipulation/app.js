fetch('data.json')
    .then(response => response.json())
    .then(data => {

        // find items in meeting room
        console.log('========================================');
        console.log('All Items in Meeting Room');

        const meetingRoomItems = [];
        for (let item of data) {
            if (item.placement.name === 'Meeting Room') {
                meetingRoomItems.push(item.name);
            }
        }
        console.log(meetingRoomItems);



        // find all electronic devices
        console.log('========================================');
        console.log('All Elecronic Devices');

        const electronicItems = [];
        for (let item of data) {
            if (item.type === 'electronic'){
                electronicItems.push(item.name);
            }
        }
        console.log(electronicItems);


        // find all furniture
        console.log('========================================');
        console.log('All Furniture');

        const furnitureItems = [];
        for (let item of data) {
            if (item.type === 'furniture') {
                furnitureItems.push(item.name);
            }
        }
        console.log(furnitureItems);


        // find all items were purchased on 16 Januari 2020
        console.log('========================================');
        console.log('All Items were Purchased on 16 Januari 2020');

        const purchasedItems = []
        for (let item of data) {
            const unixTime = item.purchased_at;
            const date = new Date(unixTime * 1000).toLocaleDateString('in-ID');
            
            if (date === '16/1/2020') {
                purchasedItems.push(item.name);
            }
        }
        console.log(purchasedItems);


        // find all items with brown color
        console.log('========================================');
        console.log('Find All Items with Brown Color');

        const brownItems = [];
        for (let item of data) {
            for (let tag of item.tags){
                if (tag === 'brown') {
                    brownItems.push(item.name);
                }
            }
        }
        console.log(brownItems);
    })
