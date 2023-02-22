const initMocks = async () => {
  console.log('run');
  if (typeof window === 'undefined') {
    console.log('server');
    const { server } = await import('./server');
    server.listen();
  } else {
    console.log('browser');
    const { worker } = await import('./browser');
    worker.start();
  }
};

initMocks();

export {};
