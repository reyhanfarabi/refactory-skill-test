fetch('data.json')
    .then(response => response.json())
    .then(data => {

        // find items in meeting room
        console.log('========================================');
        console.log('All Items in Meeting Room');
        for (let item of data) {
            if (item.placement.name === 'Meeting Room') {
                console.log(item.name);
            }
        }

        // find all electronic devices
        console.log('========================================');
        console.log('All Elecronic Devices');
        for (let item of data) {
            if (item.type === 'electronic'){
                console.log(item.name);
            }
        }
        
        // find all furniture
        console.log('========================================');
        console.log('All Furniture');
        for (let item of data) {
            if (item.type === 'furniture') {
                console.log(item.name);
            }
        }

        // find all items were purchased on 16 Januari 2020
        console.log('========================================');
        console.log('All Items were Purchased on 16 Januari 2020');
        for (let item of data) {
            const unixTime = item.purchased_at;
            const date = new Date(unixTime * 1000).toLocaleDateString('in-ID');
            
            if (date === '16/1/2020') {
                console.log(item.name);
            }
        }
        
        // find all items with brown color
        console.log('========================================');
        console.log('Find All Items with Brown Color');
        for (let item of data) {
            for (let tag of item.tags){
                if (tag === 'brown') {
                    console.log(item.name);
                }
            }
        }
    })
