<?php

declare(strict_types=1);

namespace Buggregator\Trap\Sender;

use Buggregator\Trap\Info;
use Buggregator\Trap\Support\Uuid;

final class SaasSender extends SocketSender
{
    private string $uuid;

    public function __construct(
        string $uuid = null,
        string $host = '127.0.0.1',
        int $port = 9912,
        private readonly string $clientVersion = Info::VERSION,
    ) {
        $this->uuid = $uuid ?? Uuid::generate();

        parent::__construct($host, $port);
    }

    protected function makePackage(string $payload): string
    {
        return "1|$this->clientVersion|$this->uuid|$payload\n";
    }
}
