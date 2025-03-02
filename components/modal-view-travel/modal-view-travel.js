Component({
  mixins: [],
  data: {
  },
  props: {
    visibilityModal:false,
    nameDestino:"",
    src:"",
    description:"",
    onHnadleCloseModal:()=>{}
  },
  didMount() {
    const systemInfo = my.getSystemInfoSync()
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleOpenModal(){
      this.props.onHnadleCloseModal()
    }
  },
});
