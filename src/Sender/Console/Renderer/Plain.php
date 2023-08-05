<?php

declare(strict_types=1);

namespace Buggregator\Trap\Sender\Console\Renderer;

use Buggregator\Trap\Proto\Frame;
use Buggregator\Trap\Sender\Console\RendererInterface;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * @implements RendererInterface<Frame>
 */
final class Plain implements RendererInterface
{
    public function __construct(
        private readonly TemplateRenderer $renderer,
    ) {
    }

    public function isSupport(Frame $frame): bool
    {
        return true;
    }

    public function render(OutputInterface $output, Frame $frame): void
    {
        $this->renderer->render(
            'plain',
            [
                'date' => $frame->time->format('Y-m-d H:i:s.u'),
                'channel' => \strtoupper($frame->type->value),
                'body' => \htmlspecialchars((string)$frame),
            ]
        );
    }
}
