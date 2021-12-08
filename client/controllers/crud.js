Template.home.events({
    'submit form' : function(e) {
        e.preventDefault(); // not refresh page
        var idbarang = e.target.idbarang.value;
        var nama = e.target.nama.value;
        var jumlahstok = e.target.jumlahstok.value;

        var obj = {
            idbarang:idbarang,
            nama:nama,
            jumlahstok:jumlahstok,
        }
        if(this._id) {
            Meteor.call('updateData',this._id,obj); 
            alert('Data berhasil di edit !');
        } else {
            
            Meteor.call('insertData',obj); // call method from server to insert
            alert('Data berhasil ditambahkan !');
        }
        
    },
    'click #hapus ' : function(e) {
        crud.remove(this._id); //remove data from mongodb
    },
});
Template.home.helpers({
    // get data from mongodb
    getData:function(){
        return crud.find({});
    }
})